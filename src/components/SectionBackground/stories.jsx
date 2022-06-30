import SectionBackground from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
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
      <SectionBackground {...args} />
    </div>
  );
};
