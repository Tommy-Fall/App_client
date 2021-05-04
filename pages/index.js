

export default function Home({message}) {
  return (
    <div>
      {message.time}
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch(`http://ec2-3-137-209-79.us-east-2.compute.amazonaws.com/api`)
  const message = await res.json()
  return {
      props: {
          message,
      },
  }
}
