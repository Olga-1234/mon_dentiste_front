import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle } from '../../redux';
import { useEffect } from 'react';

const TableArticles = () => {
    const Articles = useSelector((state) => state.Article.articles);
    const dispatch = useDispatch();
    console.log('les articles', Articles);

    useEffect(
        () => dispatch(fetchArticle()),

        []
    );
    return (
        <div className="d-flex  py-5 col-12 justify-content-center">
            <div class="table-responsive col-sm-9 col-12">
            <table className="table table-success table-striped table-sm ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Titre</th>
                            <th scope="col">Description</th>
                            <th scope="col">Auteur</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Articles.map((Article, index) => (
                            <tr key={Article.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{Article.title}</td>
                                <td>{Article.description}</td>
                                <td>{Article.Name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableArticles;
