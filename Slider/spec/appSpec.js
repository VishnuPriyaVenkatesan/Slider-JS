describe("getAuthorNameIfDataisNull", () => {
  it("returns empty string if first parameter is null", () => {
    var actual = getAuthorName(null, 0);
    expect(actual).toBe("");
  });
})

describe("getAuthorNameIfIdNotExists", () => {
  it("returns empty string if ID not Exists", () => {
    var actual = getAuthorName([{ "format": "jpeg", "width": 5760, "height": 3840, "filename": "1005.jpeg", "id": 1005, "author": "Matthew Wiebe", "author_url": "https://unsplash.com/photos/tBtuxtLvAZs", "post_url": "https://unsplash.com/photos/tBtuxtLvAZs" }], 234);
    expect(actual).toBe("");
  });
})

describe("getAuthorNameIfIdExists", () => {
  it("returns appropriate author name if ID Exists", () => {
    var actual = getAuthorName([{ "format": "jpeg", "width": 5626, "height": 3635, "filename": "1000.jpeg", "id": 1000, "author": "Lukas Budimaier", "author_url": "https://unsplash.com/photos/6cY-FvMlmkQ", "post_url": "https://unsplash.com/photos/6cY-FvMlmkQ" }], 1000);
    expect(actual).toBe("Lukas Budimaier");
  });
})

describe("invokeListApiURL", () => {
  it("should make an AJAX request to list url", () => {
    spyOn($, "ajax");
    invokeListApi(undefined, undefined);
    expect($.ajax.calls.mostRecent().args[0]["url"]).toEqual("https://picsum.photos/list");
  });
});