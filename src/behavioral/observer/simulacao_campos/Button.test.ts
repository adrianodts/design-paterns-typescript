import Button from './Button'
import InputText from './InputText';
import Label from './Label';

test("Should update Label and InputText with value", () => {
  const value = "This is a test";
  const button = new Button();
  let label = new Label();
  let inputText = new InputText();
  button.register(label);
  button.register(inputText);
  button.buttonClick(value);
  expect(label.getValue()).toBe(value);
  expect(inputText.getValue()).toBe(value);

  const anotherValue = "This is a another test";
  button.unregister(inputText);
  button.buttonClick(anotherValue);
  expect(label.getValue()).toBe(anotherValue);
  expect(inputText.getValue()).toBe(value); // não recebe atualização, pois foi removido da lista
})