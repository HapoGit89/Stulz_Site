// action creator

export function changePage(page) {
    return {
        type: "CHANGE", payload: {page: page}
    }
}