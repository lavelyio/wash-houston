import Paper from '@material-ui/core/Paper'
export default function Post1() {
  return (
    <Paper elevation={4} style={{ padding: 15, marginBottom: 30 }}>
      <h1> Sample 1 </h1>
      <time> December 4, 2020 </time>
      <p>
        This blog post shows a few different types of content that are supported and styled with
        Material styles. Basic typography, images, and code are all supported. You can extend these
        by modifying `Markdown.js`. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet
        fermentum. Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare
        vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada
        magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
        bibendum nulla sed consectetur.
      </p>
    </Paper>
  )
}
