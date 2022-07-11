import {useEffect, useState} from "react";

import css from '../../layout/MainLayout/MainLayout.module.css'

import {albumService} from "../../services";
import {Album} from "../../components";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        async function albumsFetch() {
            try {
                const {data} = await albumService.getAll();
                setAlbums(data);
            } catch (e) {
                alert("Не вдалося загрузити albums :(");
            }
        }

        albumsFetch();
    }, []);
    return (
        <div className={css.wrapper}>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};