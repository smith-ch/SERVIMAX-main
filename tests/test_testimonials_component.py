import os
import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager


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


def test_testimonials_component(driver):
    """
    Prueba para verificar que el componente de testimonios funcione correctamente.
    """
    scenario_name = "test_testimonials_component"
    try:
        # Cargar la página
        driver.get("http://localhost:5173")  # Cambia la URL si es necesario

        # Verificar el título de los testimonios
        testimonial_title = driver.find_element(By.XPATH, "//h2[contains(text(),'Lo que dicen nuestros clientes')]")
        assert testimonial_title.is_displayed(), "El título no se encuentra visible."

        # Verificar que haya testimonios en la página
        testimonial_items = driver.find_elements(By.CSS_SELECTOR, ".bg-gray-50")
        assert len(testimonial_items) > 0, "No se encontraron testimonios."

        # Tomar una captura de pantalla de los testimonios
        for index, testimonial in enumerate(testimonial_items):
            take_element_screenshot(driver, testimonial, f"{scenario_name}_testimonial_{index}")

    except Exception as e:
        # Captura de pantalla en caso de error
        take_element_screenshot(driver, driver.find_element(By.TAG_NAME, "body"), f"{scenario_name}_error")
        raise e
