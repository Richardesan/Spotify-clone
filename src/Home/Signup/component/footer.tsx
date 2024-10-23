import { Link } from "react-router-dom"
import { AppRoutes } from "../../../utils/route"
const Footer = () => {
  return (
    <section className="text-[#B3b3b3] text-center px-4">
    <p className="text-base font-semibold">
      Already have an account?{" "}
      <span className="text-white underline cursor-pointer">
        <Link to={AppRoutes.login}>
        Log in here

        </Link>
      </span>
    </p>
    <p className="text-[11px] py-6">
      This site is protected by reCAPTCHA and the Google
      <span className="underline"> Privacy Policy</span> and{" "}
      <span className="underline "> Terms of Service</span> apply.
    </p>
  </section>
  )
}

export default Footer