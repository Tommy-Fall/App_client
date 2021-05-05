

export default function Home({message}) {
  return (
    <div>
      <div>Hello</div>
      <div>Time: {message.time}</div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch(`http://3.140.91.107/api`)
  const message = await res.json()
  return {
      props: {
          message,
      },
  }
}
