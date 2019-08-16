import axios from 'axios';
import Stock from './stock.entity';
import router from '../../router';


export default class StockService {
    public static erro: boolean = false;

    public static getAll(): Promise<Stock[]> {
        return axios
            .get('/stocks')
            .then(response => response.data.map((stock: any) => new Stock(stock)))
    }

    public static salvar = async (stock: Stock) => {
        await axios.post('/stocks', { "name": stock.name, "date": stock.date, "value": { "start": stock.value.start, "end": stock.value.end } })
            .then(function (response) {
                router.push('/consulta');
            }).catch(function (error) {
                alert('Falha ao tentar cadastrar ação. ERRO ' + error.response.status);
            });
    };

    public static save(stock: Stock) {
        axios.post('/stocks', { "name": stock.name, "date": stock.date, "value": { "start": stock.value.start, "end": stock.value.end } })
            .then(function (response) {
                router.push('/consulta');
            }).catch(function (error) {
                StockService.erro = true;
                alert('Falha ao tentar cadastrar ação. ERRO ' + error.response.status);
            });
    }
}