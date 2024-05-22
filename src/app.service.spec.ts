import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return empty array when all of the inputs are empty', () => {
    const expected = [];
    const res = service.merge([], [], []);
    expect(res).toEqual(expected);
  });
  it('should return sorted array in ascending order', () => {
    const expected = [1, 1, 2, 4, 5, 10, 10, 20, 100, 200, 1000, 1001];
    const res = service.merge(
      [1, 2, 4, 10],
      [1001, 1000, 20, 10, 1],
      [5, 100, 200],
    );
    expect(res).toEqual(expected);
  });
});
