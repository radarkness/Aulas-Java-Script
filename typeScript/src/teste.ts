function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}