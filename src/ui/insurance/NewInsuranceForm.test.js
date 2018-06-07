import '../../enzyme-init';
import React from 'react';

import { shallow } from 'enzyme';

import { NewInsuranceForm } from './NewInsuranceForm';


const onComponentWillMount = jest.fn();
const onSubmit = jest.fn();
const handleSubmit = jest.fn();

const CATEGORIES = [
  {
    id: 123,
    title: 'Category 1',
  },
  {
    id: 456,
    title: 'Category 2',
  },
];


beforeEach(jest.clearAllMocks);

describe('basic render (no submitting, nor invalid)', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <NewInsuranceForm
        onComponentWillMount={onComponentWillMount}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        categories={CATEGORIES}
        invalid={false}
        submitting={false}
      />
    ));
  });

  it('Field for "title"', () => {
    let field;

    beforeEach(() => {
      field = component.find('Field[name="title"]');
    });

    it('does exist', () => {
      expect(field.exists()).toBe(true);
    });

    it('has label "Title"', () => {
      expect(field.prop('label')).toBe("Title");
    });

    it('is required', () => {
      const validate = field.prop('validate');
      expect(validate('')).toBeDefined();
      expect(validate('wer')).toBeUndefined();
    });
  });

  it('Field for "categoryId"', () => {
    let field;

    beforeEach(() => {
      field = component.find('Field[name="categoryId"]');
    });

    it('does exist', () => {
      expect(field.exists()).toBe(true);
    });

    it('has label "Category"', () => {
      expect(field.prop('label')).toBe("Category");
    });

    it('is required', () => {
      const validate = field.prop('validate');
      expect(validate(undefined)).toBeDefined();
      expect(validate(123)).toBeUndefined();
    });

    it('renders categories options', () => {
      const options = field.find('option');
      expect(options).toHaveLength(CATEGORIES.length);
      options.forEach((opt, i) => {
        expect(opt.prop('value')).toBe(CATEGORIES[i].id);
        expect(opt.text()).toBe(CATEGORIES[i].title);
      });
    });
  });


  it('Field for "premium"', () => {
    let field;

    beforeEach(() => {
      field = component.find('Field[name="premium"]');
    });

    it('does exist', () => {
      expect(field.exists()).toBe(true);
    });

    it('has label "Premium"', () => {
      expect(field.prop('label')).toBe("Premium");
    });

    it('has type "number"', () => {
      expect(field.prop('type')).toBe("number");
    });

    it('is required', () => {
      const validate = field.prop('validate');
      expect(validate[0]('')).toBeDefined();
      expect(validate[0]('wer')).toBeUndefined();
    });

    it('is not negative', () => {
      const validate = field.prop('validate');
      expect(validate[1]('-5')).toBeDefined();
      expect(validate[1]('5')).toBeUndefined();
    });
  });

  it('has an enabled submit button', () => {
    const button = component.find('Button[type="submit"]');
    expect(button.prop('disabled')).toBe(false);
  });
});

describe('when submitting', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <NewInsuranceForm
        onComponentWillMount={onComponentWillMount}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        categories={CATEGORIES}
        invalid={false}
        submitting
      />
    ));
  });

  it('has a disabled submit button', () => {
    const button = component.find('Button[type="submit"]');
    expect(button.prop('disabled')).toBe(true);
  });
});

describe('when invalid', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <NewInsuranceForm
        onComponentWillMount={onComponentWillMount}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        categories={CATEGORIES}
        invalid
        submitting={false}
      />
    ));
  });

  it('has a disabled submit button', () => {
    const button = component.find('Button[type="submit"]');
    expect(button.prop('disabled')).toBe(true);
  });
});
