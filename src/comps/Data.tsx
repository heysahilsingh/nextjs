export default async function Data() {
  // throw new Error();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3000);
  });
  return <h1>Promise resolved</h1>;
}
