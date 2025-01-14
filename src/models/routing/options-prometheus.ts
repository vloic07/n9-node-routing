import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Request, Response } from 'express';

export class PrometheusOptions {
	@IsOptional()
	@IsBoolean()
	isEnabled?: boolean;

	@IsOptional()
	@IsNumber()
	port?: number;

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	labels?: string[];

	// No validation because it shouldn't be in the conf but passed to the constructor as an option
	getLabelValues?: (req: Request, res: Response) => { [label: string]: string };

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	accuracies?: string[];

	// No validation because it shouldn't be in the conf but passed to the constructor as an option
	skip?: (req: Request, res: Response, labels: string[]) => boolean;
}
