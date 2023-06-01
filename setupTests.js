import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

jest.spyOn(window, 'alert').mockImplementation(() => {});