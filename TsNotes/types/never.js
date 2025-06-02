function handleError(eMes) {
    throw new Error(eMes);
}
handleError("Invalid error occured");
