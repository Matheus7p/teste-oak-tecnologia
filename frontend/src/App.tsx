import { useState } from "react";
import { useProduct } from "./hooks/useProduct";
import { createProducts } from "./api/product";
import { CreateProduct } from "./domains/model/product.model";
import { useQueryClient } from "@tanstack/react-query";
import { dateRelativeNow } from "./utils/date.utils";

function App() {

  const { data: products, isLoading, isError } = useProduct();
  const queryClient = useQueryClient();
  const [ formData, setFormData ] = useState({
    name:"",
    description: "",
    value: 0,
    available_for_sale: true,
  })
  
  const [isFormVisible, setIsFormVisible] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsFormVisible(false);

    const productData: CreateProduct = {
      ...formData,
    }

    try{
      const response = await createProducts(productData);
      console.log(response)

      queryClient.invalidateQueries({ queryKey: ["products"] });
    }catch (error){
      console.log("erro ao criar o produto: ", error)
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Erro...</p>;

  return (
    <div className="w-full min-h-screen flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-4xl font-bold">Produtos</h1>
        <p className="text-slate-400 font-thin text-xs">Produtos ordenados por valor, do menor para o maior</p>

        <section className="flex flex-col mt-4 gap-4">

            {products?.map(product => (
              <article key={product.id} className={`w-full ${product.available_for_sale ? "bg-sky-200" : "bg-red-200"} b rounded p-2 relative hover:scale-105 duration-300`}>
              <p>
                <span className="font-bold">Nome:</span> {product.name}
              </p>
              <p>
                <span className="font-bold">Valor: </span>R$ {product.value}
              </p>
              <p>
                <span className="font-bold">Disponível? </span> {product.available_for_sale ? "Sim" : "Não"}
              </p>

              <time dateTime={dateRelativeNow(product.created_ad)} title={product.created_ad}>
                Produto criado {dateRelativeNow(product.created_ad)}
              </time>
            </article>
            ))}
          
        </section>

        <button 
          onClick={() => setIsFormVisible(!isFormVisible)} 
          className="cursor-pointer w-full p-2 bg-blue-500 rounded font-medium text-white mt-6"
        >
          {isFormVisible ? "Cancelar" : "Criar novo produto"}
        </button>

        {isFormVisible && (
          <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label className="font-semibold" htmlFor="">
            Nome:
          </label>
          <input
            className="w-full border border-sky-200 mb-5 p-2 rounded outline-none"
            type="text"
            placeholder="Digite o nome do produto"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        
          <label className="font-semibold" htmlFor="">
            Valor:
          </label>
          <input
            className="w-full border border-sky-200 mb-5 p-2 rounded outline-none"
            type="number"
            placeholder="Digite o valor do produto"
            value={formData.value}
            onChange={(e) => setFormData({ ...formData, value: parseFloat(e.target.value) })}
            required
          />
        
          <label className="font-semibold" htmlFor="">
            Descrição:
          </label>
          <textarea
            className="w-full border border-sky-200 h-36 mb-5 p-2 rounded outline-none"
            placeholder="Digite a descrição do produto"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        
          <fieldset>
            <legend className="font-semibold">
              Disponível para venda
            </legend>
            <div>
              <input 
                type="radio" 
                id="sim" 
                name="disponivel" 
                value="true" 
                checked={formData.available_for_sale === true} 
                onChange={() => setFormData({ ...formData, available_for_sale: true })} 
                required 
              />
              <label className="font-medium ml-2" htmlFor="sim">
                Sim
              </label>
            </div>
        
            <div>
              <input 
                type="radio" 
                id="nao" 
                name="disponivel" 
                value="false" 
                checked={formData.available_for_sale === false} 
                onChange={() => setFormData({ ...formData, available_for_sale: false })} 
                required 
              />
              <label className="font-medium ml-2" htmlFor="nao">
                Não
              </label>
            </div>
          </fieldset>
        
          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-full p-2 mt-4 bg-green-500 rounded font-medium text-white"
          />
        </form>
        )}
      </main>
    </div>
  );
}

export default App;
