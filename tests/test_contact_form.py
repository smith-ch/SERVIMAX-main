import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

@pytest.fixture
def driver():
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service)
    yield driver
    driver.quit()

def test_contact_form(driver):
    driver.get("http://localhost:5173/")  # URL correcta de la página

    # Rellenar el formulario de contacto
    name_field = driver.find_element(By.ID, "name")
    email_field = driver.find_element(By.ID, "email")
    message_field = driver.find_element(By.ID, "message")

    name_field.send_keys("Juan Pérez")
    email_field.send_keys("juan.perez@example.com")
    message_field.send_keys("Tengo una consulta sobre su servicio.")

    # Enviar el formulario
    submit_button = driver.find_element(By.ID, "submit")
    submit_button.click()

    # Verificar que el mensaje de éxito se muestra
    time.sleep(2)
    success_message = driver.find_element(By.CLASS_NAME, "success-message")
    assert "Gracias por contactarnos" in success_message.text

    # Capturar la pantalla de la prueba
    driver.save_screenshot("screenshot_contact_form.png")
