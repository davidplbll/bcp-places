export interface IUseCase<TRequest, TResponse> {
  repository: any;
  execute(data: TRequest, optionalParam?: any): Promise<TResponse>;
}
