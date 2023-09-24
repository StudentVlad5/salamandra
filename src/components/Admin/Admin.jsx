import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose, MdEdit, MdAddCard, MdDone } from 'react-icons/md';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { fetchData, deleteData } from 'services/APIservice';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EditModal } from 'components/Admin/Modal/EditModal';
import { CreateModal } from 'components/Admin/Modal/CreateModal';
import logo from 'images/hero/salamandra.png';
import {
  AdminContainer,
  BtnWrapper,
  Heading,
  IconBtn,
  LearnMoreBtn,
  LogoutBtn,
  LogoutIcon,
  LogoutLabel,
  Table,
  TableData,
  TableFilter,
  TableHead,
  TableRow,
} from './Admin.styled';
import { logOut } from 'redux/auth/operations';

export const Admin = () => {
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterPositions, setFilterPositions] = useState([]);
  const [filterProduct, setFilterProduct] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterName, setFilterName] = useState('');
  const [filterLatinName, setFilterLatinName] = useState('');
  const [filterAlcohol, setFilterAlcohol] = useState('');
  const [filterDetails, setFilterDetails] = useState('');
  //   const [filterSize, setFilterSize] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [filterCurrency, setFilterCurrency] = useState('');
  const [filterImage, setFilterImage] = useState('');

  //   console.log('filterPositions:', filterPositions);
  //   console.log('filterPrice:', filterPrice);

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin');
        setPositions(data);
        setFilterPositions(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  async function deletePosition(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/admin/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  const handleChangeFilter = e => {
    e.preventDefault();
    switch (e.currentTarget.name) {
      case 'filterProduct':
        setFilterProduct(e.currentTarget.value);
        break;
      case 'filterCategory':
        setFilterCategory(e.currentTarget.value);
        break;
      case 'filterName':
        setFilterName(e.currentTarget.value);
        break;
      case 'filterLatinName':
        setFilterLatinName(e.currentTarget.value);
        break;
      case 'filterAlcohol':
        setFilterAlcohol(e.currentTarget.value);
        break;
      case 'filterDetails':
        setFilterDetails(e.currentTarget.value);
        break;
      //   case 'filterSize':
      //     setFilterSize(e.currentTarget.value);
      //     break;
      case 'filterPrice':
        setFilterPrice(e.currentTarget.value);
        break;
      case 'filterCurrency':
        setFilterCurrency(e.currentTarget.value);
        break;
      case 'filterImage':
        setFilterImage(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const startFilterPositions = e => {
    e.preventDefault();
    const peremOfFilter = [];
    // eslint-disable-next-line array-callback-return
    positions.map(item => {
      if (
        item.product.toString().toLowerCase().includes(filterProduct) &&
        item.category.toString().toLowerCase().includes(filterCategory) &&
        item.name.toString().toLowerCase().includes(filterName) &&
        item.latin_name.toString().toLowerCase().includes(filterLatinName) &&
        item.alcohol
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterAlcohol) &&
        item.details
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterDetails) &&
        // item.size.toString().toLowerCase().includes(filterSize) &&
        item.price.toString().toLowerCase().includes(filterPrice) &&
        item.currency.toString().toLowerCase().includes(filterCurrency) &&
        item.images.toString().toLowerCase().includes(filterImage)
      ) {
        peremOfFilter.push(item);
      }
    });

    setFilterPositions(peremOfFilter);
    // console.log('peremOfFilter:', peremOfFilter);
  };

  const cleanFilterPositions = e => {
    e.preventDefault();
    let filterG = '';
    let filterSg = '';
    let filterN = '';
    let filterLn = '';
    let filterA = '';
    let filterD = '';
    // let filterS = '';
    let filterP = '';
    let filterC = '';
    let filterI = '';
    e.currentTarget.name === 'clearFilterProduct'
      ? setFilterProduct(filterG)
      : (filterG = filterProduct);
    e.currentTarget.name === 'clearFilterCategory'
      ? setFilterCategory(filterSg)
      : (filterSg = filterCategory);
    e.currentTarget.name === 'clearFilterName'
      ? setFilterName(filterN)
      : (filterN = filterName);
    e.currentTarget.name === 'clearFilterLatinName'
      ? setFilterLatinName(filterLn)
      : (filterN = filterLatinName);
    e.currentTarget.name === 'clearFilterAlcohol'
      ? setFilterAlcohol(filterA)
      : (filterA = filterAlcohol);
    e.currentTarget.name === 'clearFilterDetails'
      ? setFilterDetails(filterD)
      : (filterD = filterDetails);
    // e.currentTarget.name === 'clearFilterSize'
    //   ? setFilterSize(filterS)
    //   : (filterS = filterSize);
    e.currentTarget.name === 'clearFilterPrice'
      ? setFilterPrice(filterP)
      : (filterP = filterPrice);
    e.currentTarget.name === 'clearFilterCurrency'
      ? setFilterCurrency(filterC)
      : (filterC = filterCurrency);
    e.currentTarget.name === 'clearFilterImage'
      ? setFilterCurrency(filterI)
      : (filterI = filterImage);
    const peremOfFilter = [];
    positions.map(item => {
      if (
        item.product?.toString().toLowerCase().includes(filterG) &&
        item.category?.toString().toLowerCase().includes(filterSg) &&
        item.name?.toString().toLowerCase().includes(filterN) &&
        item.latin_name?.toString().toLowerCase().includes(filterLn) &&
        item.alcohol?.toString().toLowerCase().includes(filterA) &&
        item.details?.toString().toLowerCase().includes(filterD) &&
        // item.size?.toString().toLowerCase().includes(filterS) &&
        item.price?.toString().toLowerCase().includes(filterP) &&
        item.currency?.toString().toLowerCase().includes(filterC) &&
        item.images?.toString().toLowerCase().includes(filterI)
      ) {
        peremOfFilter.push(item);
      }
      return peremOfFilter;
    });

    setFilterPositions(peremOfFilter);
  };

  const handleSearchOnEnter = e => {
    // eslint-disable-next-line eqeqeq
    if (e.key == 'Enter') {
      setPositions(e);
    }
  };

  // watch for view and toggle columns
  const viewWidth = window.screen.width;
  const [isLearnMore, setIsLearnMore] = useState(viewWidth <= 1536);
  const toggleLearnMore = () => setIsLearnMore(state => !state);

  // add edit modal
  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.currentTarget.dataset.modal === 'admin' ||
      e.currentTarget.dataset.modal === 'admin_create'
    ) {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        })
      );
      setTimeout(() => openModalWindow(e, null), 500);
    }
  };

  // table pagination
  const [perPage] = useState(20);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(1);

  return (
    <>
      <AdminContainer>
        <Heading>
          <NavLink to={'/'}>
            <img src={logo} width={42} height={42} alt="Logo" />
          </NavLink>
          <LogoutBtn aria-label="logout" onClick={e => dispatch(logOut())}>
            <LogoutIcon />
            <LogoutLabel>Log Out</LogoutLabel>
          </LogoutBtn>
        </Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {!isLearnMore ? (
          <LearnMoreBtn onClick={toggleLearnMore}>Less</LearnMoreBtn>
        ) : (
          <LearnMoreBtn onClick={toggleLearnMore}>More</LearnMoreBtn>
        )}
        <Table>
          <TableFilter>
            <TableRow>
              <TableHead>
                <input
                  type="text"
                  name="filterProduct"
                  placeholder="Product"
                  value={filterProduct}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterProduct"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterProduct"
                    name="clearFilterProduct"
                    onClick={e => cleanFilterPositions(e)}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterCategory"
                  placeholder="Category"
                  value={filterCategory}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterCategory"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterCategory"
                    name="clearFilterCategory"
                    onClick={e => cleanFilterPositions(e)}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterName"
                  placeholder="Name"
                  value={filterName}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterName"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterName"
                    name="clearFilterName"
                    onClick={e => cleanFilterPositions(e)}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterPrice"
                  placeholder="Price"
                  value={filterPrice}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterPrice"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterPrice"
                    name="clearFilterPrice"
                    onClick={e => cleanFilterPositions(e)}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterCurrency"
                  placeholder="Currency"
                  value={filterCurrency}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterCurrency"
                    onClick={e => startFilterPositions(e)}
                  >
                    <MdDone />
                  </button>
                  <button
                    type="button"
                    id="filterCurrency"
                    name="clearFilterCurrency"
                    onClick={e => cleanFilterPositions(e)}
                  >
                    <MdClose />
                  </button>
                </BtnWrapper>
              </TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>
                    <input
                      type="text"
                      name="filterAlcohol"
                      placeholder="Alcohol"
                      value={filterAlcohol}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterAlcohol"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterAlcohol"
                        name="clearFilterAlcohol"
                        onClick={e => cleanFilterPositions(e)}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterDetails"
                      placeholder="Details"
                      value={filterDetails}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterDetails"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterDetails"
                        name="clearFilterDetails"
                        onClick={e => cleanFilterPositions(e)}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterLatinName"
                      placeholder="LatinName"
                      value={filterLatinName}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterLatinName"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterLatinName"
                        name="clearFilterLatinName"
                        onClick={e => cleanFilterPositions(e)}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterImage"
                      placeholder="Image"
                      value={filterImage}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterImage"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterImage"
                        name="clearFilterImage"
                        onClick={e => cleanFilterPositions(e)}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  {/* <TableHead>
                    <input
                      type="text"
                      name="filterSize"
                      placeholder="Size"
                      value={filterSize}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                         id="filterSize"
                        onClick={e => startFilterPositions(e)}
                      >
                        <MdDone />
                      </button>
                      <button
                        type="button"
                        id="filterSize"
                        name="clearFilterSize"
                        onClick={e => cleanFilterPositions(e)}
                      >
                        <MdClose />
                      </button>
                    </BtnWrapper>
                  </TableHead> */}
                </>
              )}
              <TableHead>
                <IconBtn
                  type="button"
                  aria-label="Create position"
                  onClick={e => {
                    openModal(e);
                  }}
                  data-modal="admin_create"
                >
                  <MdAddCard size={25} />
                </IconBtn>
              </TableHead>
            </TableRow>
          </TableFilter>
          <tbody>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Currency</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Alcohol</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>LatinName</TableHead>
                  <TableHead>Image</TableHead>
                  {/* <TableHead>Size</TableHead> */}
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterPositions.length > 0 &&
              !error &&
              filterPositions
                .slice((current - 1) * size, current * size)
                .map(position => (
                  <TableRow key={position._id}>
                    {/* <TableData>{positions._id}</TableData> */}
                    <TableData>{position.product}</TableData>
                    <TableData>{position.category}</TableData>
                    <TableData>{position.name}</TableData>
                    <TableData>{position.price}</TableData>
                    <TableData>{position.currency}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>{position.alcohol}</TableData>
                        <TableData>{position.details}</TableData>
                        <TableData>{position.latin_name}</TableData>
                        <TableData>{position.images ? 'yes' : 'no'}</TableData>
                        {/* <TableData>{position.size}</TableData> */}
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit position"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={position._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete position"
                        onClick={() => {
                          deletePosition(position._id);
                        }}
                      >
                        <MdClose size={15} />
                      </IconBtn>
                    </TableData>
                  </TableRow>
                ))}
          </tbody>
        </Table>
        <PaginationBlock
          items={filterPositions}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditModal />
      <CreateModal />
    </>
  );
};
