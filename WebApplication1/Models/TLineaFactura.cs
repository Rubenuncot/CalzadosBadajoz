namespace CalzadosBadajoz.Modelo
{
    public class TLineaFactura
    {

        public string CodFactura { get; set; }
        public string Zapato { get; set; }
        public string Cantidad { get; set; }
        public string Total { get; set; }

        public TLineaFactura(string codFactura, string zapato, string cantidad, string total)
        {
            CodFactura = codFactura;
            Zapato = zapato;
            Cantidad = cantidad;
            Total = total;
        }
        public TLineaFactura()
        {

        }

        public float subTotal()
        {
            return float.Parse(Total);
        }

        public override string ToString()
        {
            return Zapato + " "+Cantidad+" "+Total;
        }
        public override bool Equals(object obj)
        {
            return ((TLineaFactura)obj).Zapato == Zapato;
        }
    }
}
