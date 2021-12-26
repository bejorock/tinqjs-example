export async function data(props) {
  console.log(props);

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
