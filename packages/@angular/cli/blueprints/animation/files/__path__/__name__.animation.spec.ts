import { <%= classifiedModuleName %>Animation } from './<%= dasherizedModuleName %>.animation';

describe('<%= classifiedModuleName %>Animation', () => {
  it('should create an instance', () => {
    expect(<%= classifiedModuleName %>Animation).toBeTruthy();
  });
});
