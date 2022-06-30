import TextComponent from '.';

export default {
  title: 'TextComponet',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Accusantium tenetur iusto sunt fuga aspernatur nisi praesentium incidunt
     inventore unde reiciendis doloribus, optio earum id ut totam, alias adipisci
     eveniet ipsum.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
