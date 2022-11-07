import fyRequest from "@/services/request";

export function getHotSuggests() {
  return fyRequest.get({
    url: "home/hotSuggests",
  });
}

export function getCategories() {
  return fyRequest.get({
    url: "home/categories",
  });
}

export function getHouseList(page = 1) {
  return fyRequest.get({
    url: "home/houselist",
    params: {
      page,
    },
  });
}
