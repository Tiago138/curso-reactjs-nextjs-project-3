import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dolor
          repellendus nam quod blanditiis accusantium, aliquam iste ratione eum
          reiciendis itaque a. Quis, optio sed. Autem natus voluptate aliquid
          dolorem.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
