import os
import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture(scope="function")
def driver():
    """
    Configura el controlador (driver) de Chrome para las pruebas.
    """
    service = Service(ChromeDriverManager().install())
    options = Options()
    options.add_argument("--start-maximized")
    
    # Inicializar el navegador
    driver = webdriver.Chrome(service=service, options=options)
    yield driver  # Entregar el driver a las pruebas
    
    # Cerrar el navegador después de la prueba
    driver.quit()

def take_element_screenshot(driver, element, scenario_name):
    """
    Toma una captura de pantalla específica de un elemento en la página.
    """
    screenshot_dir = "screenshots"
    if not os.path.exists(screenshot_dir):
        os.makedirs(screenshot_dir)

    screenshot_path = os.path.join(screenshot_dir, f"{scenario_name}_{int(time.time())}.png")
    element.screenshot(screenshot_path)
    print(f"Captura de pantalla guardada en: {screenshot_path}")

def test_hero_component(driver):
    """
    Prueba para verificar que el componente hero funcione correctamente.
    """
    scenario_name = "test_hero_component"
    try:
        # Cargar la página
        driver.get("http://localhost:5173")  # Cambia la URL si es necesario
        time.sleep(2)  # Espera adicional para asegurar que la página cargue completamente

        # Esperar a que el título sea visible
        hero_title = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//h2[contains(text(),'Servicios integrales para su')]"))
        )
        assert hero_title.is_displayed(), "El título no se encuentra visible."
        
        # Tomar captura solo si se encuentra el título
        take_element_screenshot(driver, hero_title, f"{scenario_name}_hero_title")

        # Verificar que el enlace 'Contáctenos' esté presente y visible
        contact_link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.LINK_TEXT, "Contáctenos"))
        )
        assert contact_link.is_displayed(), "El enlace 'Contáctenos' no está visible."
        
        # Tomar captura solo si el enlace está visible
        take_element_screenshot(driver, contact_link, f"{scenario_name}_contact_link")

        # Hacer clic en el enlace 'Contáctenos' y verificar la redirección
        contact_link.click()
        time.sleep(2)  # Espera después de hacer clic
        WebDriverWait(driver, 10).until(EC.url_contains("contact"))
        assert "contact" in driver.current_url, "No redirige correctamente a la página de contacto."

        # Captura de pantalla después de la redirección (cuando la página de contacto está cargada)
        contact_page = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "body"))
        )
        take_element_screenshot(driver, contact_page, f"{scenario_name}_contact_page")

        # Regresar a la página principal
        driver.back()
        time.sleep(2)  # Espera después de regresar a la página principal
        WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "body")))

        # Tomar captura solo después de regresar a la página principal
        home_page = driver.find_element(By.TAG_NAME, "body")
        take_element_screenshot(driver, home_page, f"{scenario_name}_after_back")

        # Verificar que el carrusel tenga al menos 4 elementos visibles solo si la página se carga correctamente
        carousel_items = [item for item in driver.find_elements(By.CSS_SELECTOR, ".slick-slide") if item.is_displayed()]
        if len(carousel_items) >= 4:
            for index, item in enumerate(carousel_items[:4]):  # Limitar a los primeros 4 elementos
                take_element_screenshot(driver, item, f"{scenario_name}_carousel_item_{index}")
                time.sleep(2)  # Espera para cada item del carrusel

    except Exception as e:
        # Captura de pantalla solo en caso de error
        body = driver.find_element(By.TAG_NAME, "body")
        take_element_screenshot(driver, body, f"{scenario_name}_error")
        print(f"Error: {e}")
        raise e
