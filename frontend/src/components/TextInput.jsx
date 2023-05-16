function TextInput (props) {
  return (
    <label>
      {props.label}
      <input {...props} />
    </label>
  )
}

export default TextInput
