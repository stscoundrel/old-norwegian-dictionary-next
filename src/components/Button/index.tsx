interface ButtonCallback{
  (): void
}

interface ButtonPros{
  text: string,
  action: ButtonCallback,
}

export default function Button({ text, action }: ButtonPros) {
  return (
    <a className="button" onClick={action}>{text}</a>
  )
}
