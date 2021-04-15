const isTestF = () => {
    const hostReg = /(233|235|test|test2|test3|local|dev)\./i;

    return location.host.match(hostReg) !== null;
}
const testSubDomain = 'test' || RegExp.$1;
export const ewt360 = (() => {
    let url = "//www.ewt360.com";
    if (isTestF()) {
        url = "//www." + testSubDomain + ".mistong.com";
    }
    return url;
});

export const study = (() => {
    let url = "//study.ewt360.com";
    if (isTestF()) {
        url = "//study." + testSubDomain + ".mistong.com";
    }
    return url;
});

export const xinli = (() => {
    let url = "//xinli.ewt360.com";
    if (isTestF()) {
        url = "//xinli." + testSubDomain + ".mistong.com";
    }
    return url;
});

export const web = (() => {
    let url = "//web.ewt360.com";
    if (isTestF()) {
        url = "//web." + testSubDomain + ".mistong.com";
    }
    return url;
});

export const live = (() => {
    let url = "//live.ewt360.com";
    if (isTestF()) {
        url = "//live." + testSubDomain + ".mistong.com";
    }
    return url;
});

export const cookiesDomain = (() => {
    let domain = ".ewt360.com";
    if (isTestF()) {
        domain = ".mistong.com";
    }
    return domain;
});

export const gateway = (() => {
    let domain = "//gateway.ewt360.com";
    if (isTestF()) {
        domain = "//gateway."+ testSubDomain +".mistong.com";
    }
    return domain;
});
