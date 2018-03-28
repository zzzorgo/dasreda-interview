export const getNextPageUrl = linkHeader => {
    if (!linkHeader) { return ""; }

    const nextPageRegEx = /<(.*)>; rel="next"/;
    const matches = linkHeader.match(nextPageRegEx);

    return matches ? matches[1] : "";
};

export const getPrevPageUrl = linkHeader => {
    if (!linkHeader) { return ""; }
    
    const prevPageRegEx = /<(.*)>; rel="prev"/;
    const matches = linkHeader.match(prevPageRegEx);

    return matches ? matches[1] : "";
};

const formatToGitHubDate = date => date.toISOString().split('T')[0];

export const getInitialUrl = () => {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    
    const formatedDate = formatToGitHubDate(startDate);
    return `https://api.github.com/search/repositories?q=language:js+created:>${formatedDate}&sort=stars`;
};
