import { SampleComp } from "@/comps";

export default function Home() { 
  return (
    <>
      <h1>Root Page {process.env.SAHIL} </h1>
      <SampleComp />
    </>
  )
}
