(async function () {
  const hearts = document.querySelectorAll(
    "a:has(span.icon-heart):not(.screen-reader-focus)"
  );

  const promises = [];

  hearts.forEach((heart, index) => {
    if (heart.parentElement.attributes["data-status"].value === "inactive") {
      promises.push(
        new Promise((resolve) => {
          setTimeout(() => {
            heart.click();
            resolve();
          }, index * 500);
        })
      );
    }
  });

  await Promise.all(promises);

  alert("All hearts clicked");
})();
