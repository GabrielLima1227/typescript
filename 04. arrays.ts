export function averageScore(ratings: number[]): number {
    if (ratings.length === 0) {
        return 0;
    }
    
    const somaTotal = ratings.reduce((sum, current) => sum + current, 0);
    
    return somaTotal / ratings.length;
}

// Heterogeneous Arrays
export function interpolateComment(
    id: number,
    comment: string,
    comments: (string | number)[]
    ) {
    const index = comments.findIndex(item => item === id);

    if (index !== -1) {
        comments[index] = comment;
    }
}

// Rest Parameters
export function formatLabels(...labels: string[]): string {
    if (labels.length === 0) {
        return "No Labels";
    } else if (labels.length === 1) {
        return `Label: ${labels[0]}`;
    } else {
        return `Labels: ${labels.join(", ")}`;
    }
}

// Any Array
export function collectSupportData(id: number, resolved: boolean) {
      const supportData :any = [];
      supportData.push("Support session started");
      supportData.push(id);
      supportData.push(resolved);
      return supportData;
}