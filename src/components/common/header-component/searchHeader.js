import React, { useState, Fragment, useEffect, useCallback } from 'react';
import { MENUITEMS } from '../../../constant/menu';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

const SearchHeader = ({menuItems, searchFunction}) => {
    const [mainmenu, setMainMenu] = useState(menuItems ? menuItems : MENUITEMS);
    const [searchValue, setsearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(false);
    const [searchResultEmpty, setSearchResultEmpty] = useState(false);
    const [searchOpen, setsearchOpen] = useState(false);

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
          //Do whatever when esc is pressed
          setsearchOpen(false)
          setsearchValue('')
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    const menuSearch = (keyword) => {
        const items = [];
        mainmenu.filter(menuItems => {
            if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            if (!menuItems.children) return false
            menuItems.children.filter(subItems => {
                if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);
                }
                if (!subItems.children) return false
                subItems.children.filter(suSubItems => {
                    if (suSubItems.title.toLowerCase().includes(keyword)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                })
            })
        });
        return items;
    }

    const handleSearchKeyword = (keyword) => {
        keyword ? addFix() : removeFix()
        setsearchValue(keyword)
        const items = searchFunction ? searchFunction(keyword) : menuSearch(keyword);
        checkSearchResultEmpty(items)
        setsearchValue(items);
    }

    const checkSearchResultEmpty = (items) => {
        if (!items.length) {
            setSearchResultEmpty(true);
            document.querySelector(".empty-menu").classList.add('is-open');
        } else {
            setSearchResultEmpty(false);
            document.querySelector(".empty-menu").classList.remove('is-open');
        }
    }

    const addFix = () => {
        setSearchResult(true);
        document.querySelector(".Typeahead-menu").classList.add('is-open');
        document.body.classList.add("offcanvas");
    }

    const removeFix = () => {
        setSearchResult(false)
        setsearchValue('')
        document.querySelector(".Typeahead-menu").classList.remove('is-open');
        document.body.classList.remove("offcanvas");
    }

    const toggleBtn = () => {
        if(searchOpen){
            setsearchOpen(!searchOpen);
            document.querySelector('.searchIcon').classList.add('open');
        }else{
            setsearchOpen(!searchOpen);
            document.querySelector('.searchIcon').classList.remove('open');
        }
    }

    
    return (
        <Fragment>
            <div>
                <form className="form-inline search-form">
                    <div className="form-group">
                        <input
                            className="form-control-plaintext searchIcon"
                            type="text"
                            placeholder="search"
                            defaultValue={searchValue}
                            onChange={(e) => handleSearchKeyword(e.target.value)}
                        />
                        <span className="d-sm-none mobile-search" onClick={toggleBtn}>
                            <Search />
                        </span>

                        <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                            {searchValue ?
                                searchValue.map((data, index) => {
                                    return (
                                        <div className="ProfileCard u-cf" key={index}>
                                            <div className="ProfileCard-avatar">
                                                <data.icon />
                                            </div>
                                            <div className="ProfileCard-details">
                                                <div className="ProfileCard-realName">
                                                    <Link 
                                                        to={`${process.env.PUBLIC_URL}${data.path}`} 
                                                        className="realname" 
                                                        onClick={removeFix}
                                                    >
                                                        {data.title}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : ''
                            }
                        </div>
                        <div className="Typeahead-menu empty-menu">
                            <div className="tt-dataset tt-dataset-0">
                                <div className="EmptyMessage">
                                    Opps!! Nenhum resultado encontrado.
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default SearchHeader;