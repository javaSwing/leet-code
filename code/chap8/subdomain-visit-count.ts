/**
 * 811. 子域名访问计数
 * @param cpdomains
 * @returns
 *
 * @link https://leetcode.cn/problems/subdomain-visit-count/description/
 */
function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map();
  for (let i = 0; i < cpdomains.length; i++) {
    const e = cpdomains[i];
    const [count, str] = e.split(' ');
    const countNumber = Number.parseInt(count);
    map.set(str, (map.get(str) || 0) + countNumber);

    for (let n = 0; n < str.length; n++) {
      if (str[n] === '.') {
        const key = str.slice(n + 1);
        map.set(key, (map.get(key) || 0) + countNumber);
      }
    }
  }

  const result: string[] = [];
  // @ts-ignore
  for (const [key, value] of map.entries()) {
    result.push(`${value} ${key}`);
  }
  return result;
}
