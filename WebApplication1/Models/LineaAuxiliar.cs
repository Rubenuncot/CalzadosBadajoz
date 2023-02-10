namespace CalzadosBadajoz.Modelo
{
    public class LineaAuxiliar
    {

        public string CodFactura { get; set; }
        public TZapato Zapato { get; set; }
        public string Cantidad { get; set; }
        public string Total { get; set; }

        public LineaAuxiliar(string codFactura, TZapato zapato, string cantidad, string total)
        {
            CodFactura = codFactura;
            Zapato = zapato;
            Cantidad = cantidad;
            Total = total;
        }
        public LineaAuxiliar()
        {

        }

        public double subTotal()
        {
            return double.Parse(Total.Replace('.', ','));
        }
        
    }
}
