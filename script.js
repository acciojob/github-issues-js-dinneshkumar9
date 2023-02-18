//your code here
$(document).ready(function () {
  let currentPage = 1;

  function loadIssues(page) {
    $.get(
      `https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`,
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
    $("#page-number").text(`Page number ${currentPage}`);
    loadIssues(currentPage);
  });

  $("#load-prev").click(function () {
    if (currentPage > 1) {
      currentPage--;
      $("#page-number").text(`Page number ${currentPage}`);
      loadIssues(currentPage);
    }
  });

  loadIssues(currentPage);
});
