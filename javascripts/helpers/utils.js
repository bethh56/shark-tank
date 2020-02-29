const printToDom = (divId, textToPrint) => {
    $(`#${divId}`).html(textToPrint);
};

export default { printToDom };

// const selectedDiv = $(#tank), temperate literal
// also using .html()