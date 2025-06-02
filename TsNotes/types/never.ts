//it is used when we need to intentionally create an error
//function never successfully returns.
//A function throws an error , A function enters an infinite loop , A code path is unreachable
// handleError("Invalid") throws the error "Invalid" and never comes back — no value is returned — which is exactly what never means.

//never terminates the execution of a programme

function handleError(eMes:string):never{
    throw new Error(eMes)
}
handleError("Invalid error occured")