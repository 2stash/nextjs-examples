import { useSelector } from "react-redux"

const pageb = () => {
  const { login } = useSelector((state) => state.login)

  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="">Next Js example</h1>
      <h2>
        Keeping track of login state on different pages so getServerSideProps
        doesn't run again
      </h2>
      <h3>Page B</h3>
      <div className="bg-gray-600 ">
        Login status is{" "}
        <p style={{ color: "blue", fontSize: 48 }}>
          {login ? "true" : "false"}
        </p>
      </div>
    </div>
  )
}

export default pageb
