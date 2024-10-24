// 将query参数转为url
export function queryToUrl(query) {
  let q = [];
  for (const key in query) {
    if (query[key]) {
      q.push(`${key}=${encodeURIComponent(query[key])}`);
    }
  }
  let r = q.join("&");
  r = r ? "?" + r : "";
  return r;
}

export function formateDate(timeStr) {
  return timeStr.split("Z")[0].split("T").join(" ");
}
