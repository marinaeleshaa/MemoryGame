export function appendChild(parent: HTMLElement  | null, child: any) {
    parent?.appendChild(child);
}

export function routeTo(url: string) {
    window.location.href = url;
}