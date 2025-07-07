const url = "http://localhost:3000";
const converterData = (dataString) => {
  const [ano] = dataString.split("-");
  return ano;
};

const api = {
  async buscarFilmes() {
    try {
      const response = await axios.get(`${url}/filmes`);
      const filmes = await response.data;
      // return await response.data;
      return filmes.map(filme => {
        return {
          ...filme,
          data: converterData(filme.lancamento)
        };
      });
    }
    catch {
      alert('Erro ao buscar filmes');
      console.error(error);
      throw error;
    };
  },

  async salvarFilme(filme) {
    try {
      // const response = await axios.post(`${url}/filmes`, filme);
      const response = await axios.post(`${url}/filmes`, {
        ...filme,
        data: converterData(filme.lancamento)
      });

      return await response.data;
    }
    catch {
      alert('Erro ao salvar filme');
      console.error(error);
      throw error;
    };
  },

  async buscarFilmePorId(id) {
    try {
      const response = await axios.get(`${url}/filmes/${id}`);
      const filme = await response.data;
      // return await response.data;

      return {
        ...filme,
        data: converterData(filme.lancamento)
      };
    }
    catch {
      alert('Erro ao buscar filme');
      console.error(error);
      throw error;
    };
  },

  async editarFilme(filme) {
    try {
      const response = await axios.put(`${url}/filmes/${filme.id}`, filme);
      return await response.data;
    }
    catch {
      alert('Erro ao editar filme');
      console.error(error);
      throw error;
    };
  },

  async excluirFilme(id) {
    try {
      const response = await axios.delete(`${url}/filmes/${id}`);
    }
    catch {
      alert('Erro ao excluir um filme');
      console.error(error);
      throw error;
    };
  },

  async buscarFilmePorTermo(termo) {
    try {
      const filmes = await this.buscarFilmes();
      const termoEmMinusculas = termo.toLowerCase();
      const filmesFiltrados = filmes.filter(filme => {
        return filme.nome.toLowerCase().includes(termoEmMinusculas) || filme.genero.toLowerCase().includes(termoEmMinusculas);
      });

      return filmesFiltrados;

    } catch (error) {
      alert('Erro ao filtrar os filmes!');
      console.error(error);
      throw error;
    };
  },

  async atualizarFavorito(id, favorito) {
    try {
      const response = await axios.patch(`${url}/filmes/${id}`, {favorito});
      return response.data;

    } catch (error) {
      alert('Erro ao atualizar o favorito.', error);
      throw error;
    }
  }
};

export default api;