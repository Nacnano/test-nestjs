import { CreateCatDto } from "./dto/create-cats.dto";
import { CatsService } from "./cats.service";
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): string;
}
