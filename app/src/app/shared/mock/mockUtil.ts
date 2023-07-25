export const mockUtil = {
  getFormatHour: jest.fn(() => '12:00'),
  getQtdeNotas: jest.fn(() => { return {qtdNotas:[306,1,1], valor_notas: [50,20,10], valor_resto: 0 }}),
  checkSaqueMax: jest.fn(() => 10000),
}
