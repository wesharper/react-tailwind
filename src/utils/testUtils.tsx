import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const CoreProviders: React.FC = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

function customRender(ui: JSX.Element, options?: RenderOptions): RenderResult {
  return render(ui, { wrapper: CoreProviders, ...options });
}

// we're intentionally exporting multiple items with the same name here
// the idea is to overwrite the default render method with our own
// eslint-disable-next-line import/export
export * from '@testing-library/react';
// eslint-disable-next-line import/export
export { customRender as render };
