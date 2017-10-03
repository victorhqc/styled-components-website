import md from 'components/md'

const ExtendAndStyled = () => md`
  ## What is the difference between \`Comp.extend\` and \`styled(Comp)\`?

  ### Behind the scenes
  The \`styled()\` factory generates new component styles with a new class. The classnames are
  then passed to the React component via the \`className\` prop.
  Calling \`extend\` creates new component styles by extending the old one, and thus doesn't
  generate two classes for a single component. (\`styled()\` factory does that)

  ### Which one should you use
  We recommend to use \`.extend\` where possible for internal \`StyledComponents\`,
  but the \`styled()\` factory for external components and cross-file containers/components
  where it isn't clear what it's going to be when writing the wrapper.

  > Wrapping a container is not recommended. It should always be attempted to wrap
  > presentational and structural components only ince cleaner logic can be achieved when
  > the container abstracts and encapsulates the presentational logic.

  Also if you haven't read yet [\`Styling any components\`](/docs/basics#styling-any-components)
  and [\`extend\`](/docs/basics#extending-styles) sections, they contain more info and examples.
`

export default ExtendAndStyled