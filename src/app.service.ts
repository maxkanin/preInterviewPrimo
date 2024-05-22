import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[],
  ): number[] {
    let index1 = 0;
    let index2 = collection_2.length - 1;
    let index3 = 0;
    const ans: number[] = [];
    if (
      index1 < collection_1.length ||
      index2 >= 0 ||
      index3 < collection_3.length
    ) {
      do {
        if (
          index1 < collection_1.length &&
          (index2 < 0 || collection_1[index1] <= collection_2[index2]) &&
          (index3 >= collection_3.length ||
            collection_1[index1] <= collection_3[index3])
        ) {
          ans.push(collection_1[index1]);
          index1 += 1;
        } else if (
          index2 >= 0 &&
          (index1 >= collection_1.length ||
            collection_2[index2] <= collection_1[index1]) &&
          (index3 >= collection_3.length ||
            collection_2[index2] <= collection_3[index3])
        ) {
          ans.push(collection_2[index2]);
          index2 -= 1;
        } else if (
          index3 < collection_3.length &&
          (index1 >= collection_1.length ||
            collection_3[index3] <= collection_1[index1]) &&
          (index2 < 0 || collection_3[index3] <= collection_2[index2])
        ) {
          ans.push(collection_3[index3]);
          index3 += 1;
        }
      } while (
        index1 < collection_1.length ||
        index2 >= 0 ||
        index3 < collection_3.length
      );
    }
    return ans;
  }
}
