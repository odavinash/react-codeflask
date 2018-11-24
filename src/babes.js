import debounce from "just-debounce-it";

const babes = async (code, config = null) => {
  try {
    const response = await fetch("https://nn16n44p94.sse.codesandbox.io", {
      method: "POST",
      cors: "cors",
      body: JSON.stringify({ code, config })
    });

    const final = await response.text();
    return final.code;
  } catch (error) {
    console.log("ERRERRERR", error);
    return Promise.reject(error);
  }
};

// const babelify = babes(
//   "const foo = async ({ a, b, ...c }) => ({ cool: true })"
// );

export default debounce(code => {
  console.log("code to compile: >>>>", code);
  return babes(code);
}, 2000);
