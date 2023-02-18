$(document).ready(function () {
  let currentPage = 1;

  function loadIssues() {
    $.get(
      `https://api.github.com/repositories/1296269/issues?page=${currentPage}&per_page=5`,
      function (issues) {
        const issueList = $("#issue-list");
        issueList.empty();
        issues.forEach(function (issue) {
          issueList.append(`<li>${issue.title}</li>`);
        });
      }
    );
  }

  $("#load-next").click(function () {
    currentPage++;
    loadIssues();
  });

  $("#load-prev").click(function () {
    if (currentPage > 1) {
      currentPage--;
      loadIssues();
    }
  });

  loadIssues();
});
